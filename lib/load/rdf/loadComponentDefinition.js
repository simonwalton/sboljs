
/*
 * Copyright (C) 2015 ICOS Group, Newcastle University.  All rights reserved.
 * Contact:  James Alastair McLaughlin <j.a.mclaughlin@ncl.ac.uk>
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *  
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
 * OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 * OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE.
 */

"use strict";

var loadIdentified = require('./loadIdentified');

module.exports = function loadComponentDefinition(sbolDocument, componentDefinition, triples) {

    loadIdentified(sbolDocument, componentDefinition, triples).forEach((triple) => {

        var predicate = triple.predicate.toString(),
            object = triple.object.toString();

        switch(predicate) {

            case 'http://sbols.org/v2#type':
                componentDefinition.addType(object);
                break;

            case 'http://sbols.org/v2#role':
                componentDefinition.addRole(object);
                break;

            case 'http://sbols.org/v2#component':
                componentDefinition.addComponent(object);
                break;

            case 'http://sbols.org/v2#sequenceAnnotation':
                componentDefinition.addSequenceAnnotation(object);
                break;

            case 'http://sbols.org/v2#sequenceConstraint':
                componentDefinition.addSequenceConstraint(object);
                break;

            case 'http://sbols.org/v2#sequence':
                componentDefinition.addSequence(object);
                break;

            default:
                componentDefinition.addAnnotation(predicate, object);
                break;
        };
    });
}


